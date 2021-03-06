import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div`
h3{
    margin: 0;
    color:${palette.gray[8]};
    margin-bottom: 1rem;
}
`;

const StyledInput = styled.input`
font-size: 1rem;
border: none;
border-bottom: 1px solid ${palette.gray[5]};
padding-bottom: 0.5rem;
outline: none;
width: 100%;
&:focus{
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
}
&+&{
    margin-top: 1rem;
}
`;

const Footer = styled.div`
margin-top: 2rem;
text-align: right;
a{
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover{
        color: ${palette.gray[9]};
    }
}
`;

const textType = {
    login: '로그인',
    register: '회원가입'
};

const AuthForm = ({ type }) => {
    const data = textType[type];
    return (
        <AuthFormBlock>
            <h3>{data}</h3>
            <form>
                <StyledInput name="username" placeholder="아이디"></StyledInput>
                <StyledInput name="password" placeholder="비밀번호" type="password"></StyledInput>
                {type === 'register' ? (
                    <StyledInput name="re-password" placeholder="비밀번호 확인" type="password"></StyledInput>
                ) : null}
            </form>
            <Footer>
                {type === 'register' ? (
                    <Link to="/login">로그인</Link>
                ) : (
                    <Link to="/register">회원가입</Link>
                )}

            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;