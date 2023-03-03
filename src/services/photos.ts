import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 as createId } from 'uuid';
import { storage } from '../libs/firebase';
import { Photo } from '../types/Photo';

export const getAll = async () => {
	let list: Photo[] = [];

	const imagesFolder = ref(storage, 'images');
	const photoList = await listAll(imagesFolder);

	for (let i in photoList.items) {
		let photoUrl = await getDownloadURL(photoList.items[i]);

		list.push({
			name: photoList.items[i].name,
			url: photoUrl,
		});
	}

	return list;
};

export const insert = async (file: File) => {
	if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
		let randomName = createId();
		let newFile = ref(storage, `images/${randomName}`);

		let upload = await uploadBytes(newFile, file);
		let photourl = await getDownloadURL(upload.ref);

		return { name: upload.ref.name, url: photourl } as Photo;
	} else {
		return new Error('Tipo de arquivo não permitido.');
	}
};

export const deletePhoto = async (name: string) => {
	let imageRef = ref(storage, `images/${name}`);
	if (imageRef) {
		await deleteObject(imageRef);
	} else {
		return new Error('Imagem não existente');
	}
};
