import { Camera, CameraResultType, CameraDirection } from "@capacitor/camera";

const takePictura = async() => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Front,
  });
}
