import { StyledFooter, StyledFooterContent, StyledFooterText } from '@widgets/layout/Footer/styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledFooterText>© {currentYear}</StyledFooterText>
      </StyledFooterContent>
    </StyledFooter>
  );
};
