import React, { useState } from "react";
import classNames from "classnames";
import './styles.css'
import { Text } from "../Text/Text";
import { useFormContext } from "react-hook-form";


function ImageUpload({ name, classText, message, children, ...restProps }) {

  const [imagePreview, setImagePreview] = useState(null); // состояние для предварительного просмотра изображения

  const classes = classNames('txt', 'dark-color', classText);

  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name]?.message;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      // Создаем URL для предварительного просмотра изображения
      setImagePreview(URL.createObjectURL(file));
    } else {
      // Сбрасываем предварительный просмотр, если файл не является изображением
      setImagePreview(null);
    }
  };

  return (
    <label className="input-wrapper">
      <Text className={classes}>{children}</Text>
      {error && <span className="error-message">{error}</span>}
      <input
        {...register(name, {
          required: message ? `${message}` : false,
          validate: value => {
            console.log("val", value)
            // Опционально можно добавить кастомную валидацию для изображения
            return value?.[0]?.type.startsWith('image/') || 'Пожалуйста, загрузите корректное изображение';
          }
        })}
        {...restProps}
        type="file"
        accept="image/*" 
        onChange={handleImageChange}
        className={(error ? "error " : "") + "input-element"}
      />
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
    </label>
  );
}

export { ImageUpload };