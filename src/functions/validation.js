export const setValidateRule = (form) => {
  const { title, creator, description } = form;
  return {
    title: {
      label: 'Title',
      placeholder: 'Type title',
      name: 'title',
      value: title,
      regExPattern: /^.{6,18}$/,
      messageError: 'Please type title, it has length from 6 to 18',
    },
    creator: {
      label: 'Creator',
      placeholder: 'Type name of Creator',
      name: 'creator',
      value: creator,
      regExPattern: /^.{6,12}$/,
      messageError: 'Please type Name of Creator, it has length from 6 to 12',
    },
    description: {
      label: 'Description',
      placeholder: 'Type description details',
      name: 'description',
      value: description,
      regExPattern: /^.{0,150}$/,
      messageError: 'Please type Description, it has length from 0 to 150',
    },
  };
};
