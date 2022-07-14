import { GridItem, GridContainer, InnerContainer, Item } from './styles';
import { Container } from '@mui/material';




export default function GridLayout({ items, target }) {
  return (
    <GridContainer container>
      {items.map(item => {
        const { id, name, src } = item;
        return (
          <GridItem item s={6} md={3} key={id}>
            <Container sx={{ overflow: 'hidden' }}>
              <InnerContainer id={`${target}-item`}>
                <Item src={src} alt={name} />
              </InnerContainer>
            </Container>
          </GridItem>
        );
      })}
    </GridContainer>
  );
}
