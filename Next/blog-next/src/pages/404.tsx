import { CustomPageHead } from '../components/CustomPageHead';
import { NotFoundPage } from '../modules/NotFoundPage';

export default function Page404() {
  return (
    <>
      <CustomPageHead
        titleComplement="Página não encontrada"
        description="O post solicitado não foi encontrado"
      />

      <NotFoundPage />
    </>
  );
}
