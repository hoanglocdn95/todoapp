import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { STATUS, ROUTE, FEATURES, ALERT } from '../constants';
import { initMessage } from '../functions/shared';
import InputText from '../components/InputText';
import Button from '../components/Button';
import RadioCheckboxButton from '../components/RadioCheckboxButton';
import { setValidateRule } from '../functions/validation';
import alertStore from '../stores/alertStore';
import todoStore from '../stores/todoStore';

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

const DEFAULT_VALUE = {
  id: '',
  title: '',
  creator: '',
  description: '',
  status: STATUS.NEW,
};

const getMessageAddNew = initMessage(FEATURES.ADD_NEW);
const getMessageEditTask = initMessage(FEATURES.EDIT_TASK);
const getMessageDeleteTask = initMessage(FEATURES.DELETE_TASK);

const EditAddNew = ({ isEditTask }) => {
  const [form, setForm] = useState(DEFAULT_VALUE);
  const [validData, setValidData] = useState({
    title: false,
    creator: false,
    description: true,
  });

  const {
    CurrentItem,
    reqDetailTask,
    reqAddNewTask,
    reqEditTask,
    reqDeleteTask,
  } = todoStore;

  useEffect(() => {
    reqDetailTask(idTask);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentItem]);

  const navigate = useNavigate();
  const { idTask } = useParams();

  const setDefaultValue = (e) => {
    e && e.preventDefault();
    const { creator, description, title } = todoStore.CurrentItem;
    setForm(CurrentItem);
    const formField = setValidateRule(CurrentItem);

    setValidData({
      title: formField.title.regExPattern.test(title),
      creator: formField.creator.regExPattern.test(creator),
      description: formField.description.regExPattern.test(description),
    });
  };

  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (name !== 'status') {
      setValidData({
        ...validData,
        [name]: setValidateRule(form)[name].regExPattern.test(value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      id: nanoid(),
      status: STATUS.NEW,
    };

    reqAddNewTask(
      data,
      () => {
        alertStore.success(
          getMessageAddNew('Task is created successfully!'),
          ALERT.DEFAULT_TIME
        );
        navigate(ROUTE.All);
      },
      (err) =>
        alertStore.error(getMessageAddNew(err.message), ALERT.DEFAULT_TIME)
    );
  };

  const handleChangeTask = (e, isDelete) => {
    e.preventDefault();
    if (!isDelete) {
      reqEditTask(
        form,
        () => {
          alertStore.success(
            getMessageEditTask(
              `Task have id: ${idTask} which is updated successfully!`
            ),
            ALERT.DEFAULT_TIME
          );
          navigate(ROUTE.All);
        },
        (err) =>
          alertStore.error(getMessageEditTask(err.message), ALERT.DEFAULT_TIME)
      );
    } else {
      reqDeleteTask(
        idTask,
        () => {
          alertStore.success(
            getMessageDeleteTask(`Task have id: ${idTask} which is deleted!`),
            ALERT.DEFAULT_TIME
          );
          navigate(ROUTE.All);
        },
        (err) => {
          alertStore.error(
            getMessageDeleteTask(err.message),
            ALERT.DEFAULT_TIME
          );
        }
      );
    }
  };

  const renderForm = () => {
    const formField = setValidateRule(form || DEFAULT_VALUE);
    return Object.keys(formField).map((keyItem, index) => {
      const { value, name, messageError } = formField[keyItem];
      return (
        <InputText
          {...formField[keyItem]}
          key={`${name}_${index}`}
          onChange={handleChangeForm}
          error={!value || validData[name] ? '' : messageError}
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
        name={'status'}
        value={item.value}
        isChecked={form?.status === item.value}
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
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 40,
            }}
          >
            {renderRadioButton()}
          </div>
          <div
            style={{
              display: 'flex',
              width: 324,
              justifyContent: 'space-between',
            }}
          >
            <Button
              title={'Save'}
              disabled={!checkValidate()}
              onClick={handleChangeTask}
            />
            <Button title={'Reset'} onClick={setDefaultValue} />
            <Button
              title={'Delete'}
              onClick={(e) => handleChangeTask(e, true)}
            />
          </div>
        </>
      ) : (
        <div>
          <Button
            title={'Save'}
            type={'submit'}
            disabled={!checkValidate()}
            onClick={handleSubmit}
          />
        </div>
      )}
    </form>
  );
};

export default observer(EditAddNew);
