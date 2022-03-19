import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: ${({ Bg }) => Bg ? Bg : "#fafafa"};
border: ${({ Bd }) => Bd ? Bd : "none"};
transition: all 0.3s ease-in-out;
display: ${({ showAddForm }) => showAddForm ? "none" : "block"};


&:active {
opacity: 1;
}
`

export const Circle = styled.div`
width: 40px;
height: 40px;
animation: colorchange 3s linear infinite;
background: radial-gradient(circle,  #0ff 0%, #e0e5ec 60%);
background-color: ${({ Bg }) => Bg ? Bg : "#fafafa"};
 box-shadow:
   2px 2px 20px 0px #fff9,
   -1px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001,
   inset 0px 0px 0px 0px #fff9,
   inset 0px 0px 0px 0px #0001,
   inset 0px 0px 0px 0px #fff9,        inset 0px 0px 0px 0px #0001;
 transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);


 &:hover{
background: radial-gradient(circle,  #0ff 0%, #e0e5ec 60%);
  color: rgba(102,102,102,.5); 
  animation: colorchange 3s linear infinite;
}

&:active{
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
} 

@keyframes colorchange {
	to {filter: hue-rotate(360deg);}
}
;

 box-shadow:
1px 3px 10px 0px #01010999, 4px -4px 5px 0px 7px 7px 30px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #148457;

 border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
`

export const Flexbox = styled.div`
display: flex;
color: ${({color}) => color ? color : "black"};
flex-direction: ${({wdir}) => wdir ? wdir : "row"};
justify-content: ${({justify}) => justify ? justify : "none"};
align-items: ${({align}) => align ? align : "none"};
gap: ${({ gap }) => gap ? gap : "1em"};
padding: ${({ p }) => p ? p : 0};

 .display__text{
    color: blue;
    text-align: center;

  }

  .todo__list{
    font-size: 14px;
  }

  .finished{
    text-decoration: line-through;
    color: blue;
  }

  .showcolor{
 background: radial-gradient(circle,  #0ff 0%, #e0e5ec 60%);
   animation: colorchange 3s linear infinite;
  }

      .showcolor:active{
 background: radial-gradient(circle,  #0ff 0%, #e0e5ec 60%);
  color: rgba(102,102,102,.5); 
  animation: colorchange 3s linear infinite;
} 

@media (max-width: 768px) {
flex-direction: ${({ mdir }) => mdir ? mdir : "row"};

  .todo__list{
    font-size: 13px;
  }
}
`

export const Restrainer = styled.div`
width: 100%;
margin: 0 auto;
max-width: ${({Rs}) => Rs ? Rs : "90%"};
`

export const Sector = styled.div`
gap: ${({gap}) => gap ? gap : "1em"};
display: ${({display}) => display ? display : "grid"};
width: ${({w}) => w ? w : "100%"};
padding: ${({p}) => p ? p : "1em 0"};
background-color: ${({Bg}) => Bg ? Bg : "transparent"};
grid-template-columns: ${({gc}) => gc ? gc : "1fr 1fr"};
grid-template-rows: ${({gr}) => gr ? gr : "1fr"};
justify-content: ${({justify}) => justify ? justify : "space-between"};
align-items: ${({align}) => align ? align : "center"};

@media (max-width: 768px) {
grid-template-columns: ${({gc}) => gc ? gc : "1fr"};
grid-template-rows: ${({ gr }) => gr ? gr : "1fr"};
}

@media (max-width: 768px) {
flex-direction: ${({mdir}) => mdir ? mdir : "column"};
}
`

export const Divider = styled.div`
background-color: ${({Bg}) => Bg ? Bg : "#eee"};
padding: ${({ p }) => p ? p : "1em"};
flex-basis: ${({ basis }) => basis ? basis : "none"}

@media (max-width: 768px) {
flex-basis: ${({ mbasis }) => mbasis ? mbasis : "100%"}
}
`

export const Button = styled.button`
    background-color: ${({Bg}) => Bg ? Bg : "#eee"};
    width: ${({w}) => w ? w : "auto"};
    color: ${({color}) => color ? color : "#blue"};
    border: 1px solid transparent;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
      0px 2px 4px rgba(96, 97, 112, 0.16);
    font-weight: 500;
    font-size: .8rem;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: capitalize;
    padding: 1em 2em;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-in-out, color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, 
      box-shadow 0.15s ease-in-out;

      &:hover {
          color: ${({hcolor}) => hcolor ? hcolor : "white"};
                box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
                0px 2px 4px rgba(96, 97, 112, 0.14);
               background-color: ${({Bg}) => Bg ? Bg : "#transparent"};

              
      }
`

export const Button2 = styled(Button)`
  border: 1px solid #eee;

        &:hover {
                box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
                0px 2px 4px rgba(96, 97, 112, 0.2);
                border: 1px solid transparent;
      }
`

export const Card = styled.div`
animation: colorchange 3s linear infinite;
background: radial-gradient(circle,  #0ff 0%, #e0e5ec 60%);
background-color: ${({Bg}) => Bg ? Bg : "transparent"};
  color: rgba(102,102,102,.5); 
                border-radius: 4px;
                padding: 2em;
                margin: 1em 0;
                box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001,
   inset 0px 0px 0px 0px #fff9,
   inset 0px 0px 0px 0px #0001,
   inset 0px 0px 0px 0px #fff9,        inset 0px 0px 0px 0px #0001;
 transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);

 &:hover{
background: radial-gradient(circle,  #0ff 0%, #e0e5ec 60%);
  color: rgba(102,102,102,.5); 
  animation: colorchange 3s linear infinite;
}

&:active{
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
} 

@keyframes colorchange {
	to {filter: hue-rotate(360deg);}
}
                
`

export const Card2 = styled(Card)`
animation: none;
background: transparent;

 &:hover{
animation: none;
background: transparent;
}

// &:active{
//  background: radial-gradient(circle,  #0ff 0%, #e0e5ec 60%);
//   color: rgba(102,102,102,.5); 
//   animation: colorchange 3s linear infinite;
// } 
`

export const Logo = styled.div`
 cursor: pointer;
  color:  radial-gradient(circle,  #0ff 0%, #e0e5ec 60%); 
  animation: colorchange 3s linear infinite;

      @keyframes colorchange {
	to {filter: hue-rotate(360deg);
  }

 
`


export default Container
