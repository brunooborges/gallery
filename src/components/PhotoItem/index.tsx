import * as C from './styles';

type Props = {
	url: string;
	name: string;
	onDelete: (name: string) => void;
};

export const PhotoItem = ({ url, name, onDelete }: Props) => {
	return (
		<C.Container>
			<img
				src={url}
				alt={name}
			/>
			<p>{name}</p>
			<C.Button
				onClick={() => {
					window.confirm('Confirmar exclusão?') && onDelete(name);
				}}>
				Excluir
			</C.Button>
		</C.Container>
	);
};
