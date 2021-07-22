const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

const photoHouseContainer = document.querySelector('.ad-form__photo');
const photoHouseChooser = document.querySelector('.ad-form__upload input[type=file]');
const previewPhotoHouse = document.querySelector('.ad-form__photo img');

const uploadPhoto = (fileChooser, preview) => {
  fileChooser.addEventListener('change', () =>{

    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

photoHouseContainer.style.display = 'flex';
photoHouseContainer.style.alignItems = 'center';
photoHouseContainer.style.padding =  '0 15px';

uploadPhoto(avatarChooser, previewAvatar);
uploadPhoto(photoHouseChooser, previewPhotoHouse);
