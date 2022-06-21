import * as Styles from "./ContentLogo.styles";

interface ContentLogoProps {
  year: number;
  month: number;
}

function ContentLogo({ year, month }: ContentLogoProps) {
  return (
    <Styles.LogoContent>
      <Styles.ContentText>
        {year}년 {month}월 기준
      </Styles.ContentText>
    </Styles.LogoContent>
  );
}

export default ContentLogo;
