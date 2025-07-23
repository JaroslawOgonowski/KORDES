import styled from "styled-components";

const ListI = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2em;
  gap: 20px;
cursor: default;
  transition: 500ms;

&:hover{
  transform: scale(1.01);
  filter: brightness(1.2);
}
`;
export const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.1em;
  `
const Content = styled.div`
margin: 0;
  font-size: 0.8em;
  color: rgba(19, 18, 18, 1);
  `

export const ListItem = ({title, content, icon}) => {
  return (
    <ListI>
      <Icon src={icon} alt={title} />
      <Text>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Text>
    </ListI>
  );
};
