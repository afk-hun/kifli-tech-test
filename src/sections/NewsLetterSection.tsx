import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  ContentContainer,
  TextContainer,
  Title,
  Description,
  InputForm,
  Container,
  Button,
  Input,
  Section,
} from "../components/newsLetter/NewsLetters";
import { postSubscription } from "../api/apiCall";

export default function NewsLetterSections() {
  const [isDisabled, setIsDisabled] = useState(true);
  let inputRef = useRef<HTMLInputElement>(null);

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const data = await postSubscription(inputRef.current!.value);
      console.log(data);
    } catch (e: any) {
      console.log(e);
    }
  }

  function inputChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setIsDisabled(
      event.currentTarget.value.search(/[\w]+@+[\w]+[.]+[\w]/) !== 0
    );
  }

  return (
    <Section>
      <Container>
        <ContentContainer>
          <TextContainer>
            <Title style={{ justifyContent: "flex-start" }}>
              Maradj naprakész!
            </Title>
            <Description style={{ justifyContent: "flex-start" }}>
              Iratkozz fel hírlevelünkre, hogy elsőként értesülj új
              szolgáltatásainkról, híreinkről és praktikus logisztikai
              tippekről.
            </Description>
          </TextContainer>

          <InputForm onSubmit={submitHandler}>
            <Input
              placeholder="asd@mail.com"
              ref={inputRef}
              onChange={inputChangeHandler}
            />

            <Button disabled={isDisabled} type="submit">
              Feliratkozok
            </Button>
          </InputForm>
        </ContentContainer>
      </Container>
    </Section>
  );
}
