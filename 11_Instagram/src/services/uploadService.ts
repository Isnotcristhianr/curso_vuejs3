import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

export class UploadService {
  /**
   * Sube una imagen a Firebase Storage y devuelve la URL de descarga
   * @param file Archivo a subir
   * @param path Ruta donde se guardará el archivo (por defecto 'posts')
   * @returns URL de descarga del archivo
   */
  static async uploadImage(file: File, path: string = 'posts'): Promise<string> {
    try {
      // Crear un nombre único para el archivo
      const fileExtension = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      
      // Crear referencia al archivo en Storage
      const storageRef = ref(storage, `${path}/${fileName}`);
      
      // Subir el archivo
      const snapshot = await uploadBytes(storageRef, file);
      
      // Obtener la URL de descarga
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      return downloadURL;
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      throw new Error('No se pudo subir la imagen');
    }
  }
} 