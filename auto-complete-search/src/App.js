import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = (props) => {
  const { setSearchKeyword } = props;
  const [isTyped, setIsTyped] = useState(false);
  const onChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
    if (e.target.value) {
      setIsTyped(true);
    } else {
      setIsTyped(false);
    }
  };
  return (
    <SearchBarWrapper>
      <SearchIcon>🔍</SearchIcon>
      <SearchInputBox onChange={onChangeSearchKeyword}></SearchInputBox>
      <SearchCancelButton isTyped={isTyped}>X</SearchCancelButton>
      <SearchBarVerticalLine />
      <SearchSupportButtonKeyboard>⌨</SearchSupportButtonKeyboard>
      <SearchSupportButtonMic>🎤</SearchSupportButtonMic>
    </SearchBarWrapper>
  );
};

const AutoCompleteSearchBox = (props) => {
  const searchKeyword = props.searchKeyword;
  return (
    <AutoCompleteSearchBoxWrapper searchKeyword={searchKeyword}>
      <AutoCompleteKeywordBox></AutoCompleteKeywordBox>
      <AutoCompleteButtons>
        <GoogleSearchButton>Google 검색</GoogleSearchButton>
        <ImFeelingLuckyButton>I'm Feeling Lucky</ImFeelingLuckyButton>
      </AutoCompleteButtons>
      <DeclarationButton></DeclarationButton>
    </AutoCompleteSearchBoxWrapper>
  );
};

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <Wrapper>
      <Heading>Google</Heading>
      <SearchBar setSearchKeyword={setSearchKeyword} />
      <AutoCompleteSearchBox searchKeyword={searchKeyword} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  padding: 200px 0;
`;

const Heading = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 60px;
  text-align: center;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  height: 60px;
  margin: 50px auto 0;
  border-radius: 25px;
  padding: 0 5px;
  background-color: #555;
`;

const SearchIcon = styled.span`
  width: 40px;
  height: 40px;
  background-color: tranparent;
  font-size: 30px;
`;

const SearchInputBox = styled.input`
  height: 70%;
  width: 350px;
  font-size: 30px;
  background-color: transparent;
  outline: none;
  border: none;
`;

const SearchCancelButton = styled.div`
  position: absolute;
  right: 35%;
  display: ${(props) => (props.isTyped ? "block" : "none")};
  font-size: 30px;
  font-weight: 100;
`;

const SearchBarVerticalLine = styled.div`
  width: 2px;
  height: 70%;
  background-color: #777;
`;

const SearchSupportButtons = styled.div``;

const SearchSupportButtonKeyboard = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  background-color: transparent;
  cursor: pointer;
`;

const SearchSupportButtonMic = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  background-color: transparent;
  cursor: pointer;
`;

const AutoCompleteSearchBoxWrapper = styled.div`
  display: ${(props) => (props.searchKeyword === "" ? "none" : "block")};
  width: 600px;
  margin: 0 auto;
  background-color: #555;
`;

const AutoCompleteKeywordBox = styled.div``;

const AutoCompleteButtons = styled.div``;

const GoogleSearchButton = styled.div``;

const ImFeelingLuckyButton = styled.div``;

const DeclarationButton = styled.div``;

export default App;
