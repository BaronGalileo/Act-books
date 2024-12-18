import React, { useState } from "react";

function TestAdd() {
  const [file, setFile] = useState(null); // Состояние для хранения выбранного файла
  const [imagePreview, setImagePreview] = useState(null); // Состояние для предварительного просмотра изображения

  // Обработчик изменения файла
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile); // Сохраняем выбранный файл в состояние
      setImagePreview(URL.createObjectURL(selectedFile)); // Для предварительного просмотра изображения
    } else {
      alert("Please select a valid image file.");
    }
  };
  debugger
  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    debugger
    e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Добавляем файл в FormData
    formData.append("fileName", file.name); // Можно добавить дополнительные поля, например имя файла

    try {
      // Отправляем данные на сервер с использованием fetch
      const response = await fetch("http://world.life.destiny.fvds.ru/backend/api/images", {
        method: "POST",
        body: formData, // Тело запроса — это FormData
      });
      debugger

      if (response.ok) {
        const data = await response.json(); // Преобразуем ответ в JSON
        console.log("File uploaded successfully:", data);
        alert("File uploaded successfully!");
      } else {
        console.error("Failed to upload file:", response.statusText);
        alert("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file.");
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            accept="image/*" // Допускаем только изображения
            onChange={handleFileChange} // Обработчик для изменения файла
          />
        </div>

        {imagePreview && (
          <div>
            <h3>Image Preview:</h3>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: "200px", maxHeight: "200px" }} />
          </div>
        )}

        <button type="submit" disabled={!file}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default TestAdd;