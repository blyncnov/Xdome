import styled from 'styled-components';

export const InputeContainer = styled.div`
width: 100%;

input{
    width: 100%;
    display: block;
    padding: .5em 1em ;
    margin: 1em 0;
    border: 1px solid #eee;
    color: #333;
    border-radius: 4px;
        outline: none;
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

button {
     border: 1px solid #eee;
    color: blue;
    border-radius: 4px;
    outline: none;
    border: none;
     padding: .5em ;
               box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001,
   inset 0px 0px 0px 0px #fff9,
   inset 0px 0px 0px 0px #0001,
   inset 0px 0px 0px 0px #fff9,        inset 0px 0px 0px 0px #0001;
 transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);

 &:active{
 box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

}


`

export default InputeContainer