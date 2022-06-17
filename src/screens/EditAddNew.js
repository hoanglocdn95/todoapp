import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LIST_TO_DO_KEY, STATUS, ROUTE } from "../constants";
import { localStorageUlti } from "../functions/localStorage";
import InputText from "../components/InputText";
import Button from "../components/Button";
import RadioCheckboxButton from "../components/RadioCheckboxButton";
import { setValidateRule } from "../functions/validation";

const radioList = [
  {
    title: STATUS.NEW,
    value: STATUS.NEW,
  },
  {
    title: STATUS.DOING,
    value: STATUS.DOING,
  },
  {
    title: STATUS.DONE,
    value: STATUS.DONE,
  },
];

const { get, set } = localStorageUlti(LIST_TO_DO_KEY, []);

const EditAddNew = ({ isEditTask }) => {
  const [form, setForm] = useState({
    title: "",
    creator: "",
    description: "",
    status: STATUS.NEW,
  });
  const [validData, setValidData] = useState({
    title: false,
    creator: false,
    description: true,
  });

  useEffect(() => {
    if (isEditTask) setDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { creator, description, title } = form;
    setValidData({
      title: formField[0].regExPattern.test(title),
      creator: formField[1].regExPattern.test(creator),
      description: formField[2].regExPattern.test(description),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const formField = setValidateRule(form);
  const navigate = useNavigate();
  const { idTask } = useParams();

  const setDefaultValue = (e) => {
    e && e.preventDefault();
    setForm(get()[idTask]);
  };

  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      status: STATUS.NEW,
    };
    set([data, ...get()]);
    navigate(ROUTE.All);
  };

  const handleChangeTask = (e, isDelete) => {
    e.preventDefault();
    const todoItemsLocalStorage = get();
    if (!isDelete) {
      todoItemsLocalStorage.splice(idTask, 1, form);
    } else {
      todoItemsLocalStorage.splice(idTask, 1);
    }
    set([...todoItemsLocalStorage]);
    navigate(ROUTE.All);
  };

  const renderForm = () => {
    return formField.map((item, index) => {
      return (
        <InputText
          {...item}
          key={`${item.name}_${index}`}
          onChange={handleChangeForm}
          error={!item.value || validData[item.name] ? "" : item.messageError}
        />
      );
    });
  };

  const checkValidate = () =>
    validData.title && validData.creator && validData.description;

  const renderRadioButton = () => {
    return radioList.map((item) => (
      <RadioCheckboxButton
        key={`${item.value}`}
        title={item.title}
        type="radio"
        handleOnChange={handleChangeForm}
        name={"status"}
        value={item.value}
        isChecked={form.status === item.value}
      />
    ));
  };

  return (
    <form className={`formClassContainer`}>
      {renderForm()}
      {isEditTask ? (
        <>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            {renderRadioButton()}
          </div>
          <div
            style={{
              display: "flex",
              width: 324,
              justifyContent: "space-between",
            }}
          >
            <Button
              title={"Save"}
              disabled={!checkValidate()}
              onClick={handleChangeTask}
            />
            <Button title={"Reset"} onClick={setDefaultValue} />
            <Button
              title={"Delete"}
              onClick={(e) => handleChangeTask(e, true)}
            />
          </div>
        </>
      ) : (
        <div>
          <Button
            title={"Save"}
            type={"submit"}
            disabled={!checkValidate()}
            onClick={handleSubmit}
          />
        </div>
      )}
    </form>
  );
};

export default EditAddNew;
