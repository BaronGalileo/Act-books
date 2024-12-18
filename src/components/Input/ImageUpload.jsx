import React, { useEffect, useState } from "react";
import classNames from "classnames";
import './styles.css'
import { Text } from "../Text/Text";
import { useFormContext } from "react-hook-form";


export const ImageUpload = ({ name, classText, nameFile, imageType=false, message, bookId=false, children, ...restProps }) => {

  const [imagePreview, setImagePreview] = useState(null); // состояние для предварительного просмотра изображения

  const classes = classNames('txt', 'dark-color', classText);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;

  const errorNameFile = errors[`fileName`]?.message

  const chooseFoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = ev => {
      setImagePreview(ev.target.result);
    }
    reader.readAsDataURL(file);
  };

  useEffect(() => {

  }, [imagePreview])

  return (
    <label className="input-wrapper">
      <Text className={classes}>{children}</Text>
      {error && <span className="error-message">{error}</span>}
      <input
        {...register(name, {
          required: message ? `${message}` : false,
          validate: (value) => {
            return value?.[0]?.type.startsWith('image/') || 'Пожалуйста, загрузите корректное изображение';
          }
        })}
        {...restProps}
        type="file"
        accept="image/*,.png,.jpg," 
        onChange={chooseFoto}
        className={(error ? "error " : "") + "input-element"}
      />
      <input {...register(`fileName`, {
        required: message ? `${message}` : false,
      })}
      type="text"
      placeholder="Название обложки"
      className={(error ? "error " : "") + "input-element"} 
      />
      <input {...register(`imageType`)} type="hidden" value={imageType}/>
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
    </label>
  );
}
