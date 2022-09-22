import { CustomPageHead } from '../components/CustomPageHead';
import { SITE_NAME } from '../config';
import { NotFoundPage } from '../modules/NotFoundPage';

export default function Page404() {
  return (
    <>
      <CustomPageHead
        title={`${SITE_NAME}: Página não encontrada`}
        description="O post solicitado não foi encontrado"
      />

      <NotFoundPage />
    </>
  );
}
