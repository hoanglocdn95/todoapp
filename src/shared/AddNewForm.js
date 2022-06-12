import { useState } from 'react';
import InputText from '../components/InputText';
import Button from '../components/Button';

const AddNewForm = ({ formClass, handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [creator, setCreator] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form onSubmit={handleSubmit} className={`formClassContainer ${formClass}`}>
      <InputText
        label={'Title'}
        placeholder={'Type title'}
        name={'title'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputText
        label={'Creator'}
        placeholder={'Name of Creator'}
        name={'creator'}
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
      />
      <InputText
        label={'Description'}
        placeholder={'Description Details'}
        name={'description'}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <Button title={'Save'} type={'submit'} />
      </div>
    </form>
  );
};

export default AddNewForm;
