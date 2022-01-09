import { useHeaderService } from "./service";

import { Menu } from "./menu";

import * as S from "./styles";

const Header = (): JSX.Element => {
  const { NAV_HELPER } = useHeaderService();
  console.log({ NAV_HELPER });
  return (
    <S.Container>
      <Menu />
    </S.Container>
  );
};

export default Header;
