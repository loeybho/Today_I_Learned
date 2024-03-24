// 간단한 회원 가입 폼
// 1. 이름
// 2. 생년 월일
// 3. 국적
// 4. 자기 소개

import { useState } from "react";

function Register() {
  const [input, setInput] = useState({
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const onChangeName = (e) => {
  //   setInput({ ...input, name: e.target.value });
  // };

  // const onChnageBirth = (e) => {
  //   setInput({ ...input, birth: e.target.value });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({ ...input, country: e.target.value });
  // };

  // const onChangeBio = (e) => {
  //   setInput({ ...input, bio: e.target.value });
  // };

  return (
    <>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
    </>
  );
}

export default Register;
