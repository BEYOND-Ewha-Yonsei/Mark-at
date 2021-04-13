import { Input } from 'antd';
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Box } from 'src/components/layout/Box';
import { Color } from 'src/styles/Color';
import { mq } from 'src/styles/mediaQueries';
import { Stylesheet } from 'src/styles/types';
export function RegisterForm() {
  const [form, setForm] = useState({ id: "", pw: "",email:"",nickname:"" });
  const navigate = useNavigate()
  const handleFormChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const resetForm = () => {
    setForm({ id:"", pw:"",email:"", nickname:"" });
  };

  const handleSubmit = () => {
    console.log(form);
    //if (!validCheck) return;
    axios
      .post(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/create/`, form)
      .then(function (response) {
        console.log(response);
        alert("Sign up success! Please login again");
        navigate('/seller-login')
      })
      .catch(function (error) {
        resetForm();
        alert("sign up fail!");
        console.log(error);
      });
  };

  return (
    <Box direction="column" align="center">
      <div css={style.formContent}>
        <Box direction="column" styles={style.inputContainer}>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>ID</span>
            <Input
              size="large"
              name="id"
              type="text"
              value={form.id}
              onChange={handleFormChange}
            />
          </Box>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>PASSWORD</span>
            <Input
              size="large"
              name="pw"
              value={form.pw}
              onChange={handleFormChange}
              type="text"
            />
          </Box>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>NICKNAME</span>
            <Input
              size="large"
              name="nickname"
              type="text"
              value={form.nickname}
              onChange={handleFormChange}
            />
          </Box>

          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>EMAIL</span>
            <Input
              size="large"
              name="email"
              type="text"
              value={form.email}
              onChange={handleFormChange}
            />

          </Box>
        </Box>
      </div>
      <Box direction="row" align ="center" margin="3em 0 0 0">
      <button
            style={style.btn}

            onClick={handleSubmit}>Register
        </button>
      </Box>
    </Box>
  );
}
export const MemoizedLoginForm = React.memo(RegisterForm);

const style: Stylesheet = {
  formContent: {
    [mq[480]]: {
      marginLeft: '-1.3em',
    },
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    width: '8em',
    paddingRight: '1em',
    [mq[480]]: {
      width: '8em',
    },
  },
  input: {
    width: '8.6em',
    height: '1.8em',
    textAlign: 'center',
    letterSpacing: '0.6em',
    fontSize: '1.4em',
    '::placeholder': {
      letterSpacing: '0.3em',
      color: Color.borderInactive,
      opacity: 1 /* Firefox */,
    },
    ':focus': {
      '::placeholder': {
        color: Color.primaryWhite,
        opacity: 0,
      },
    },
  },
  btn: {
    width: '12em',
    height:'2em',
    marginTop: '1.5em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    outline: 'none',
    border: 'none',
    borderRadius: 5,
    fontWeight: 500,
    color: 'rgba(255,255,255)',
    font: "Poppins-Medium"
  },
}

