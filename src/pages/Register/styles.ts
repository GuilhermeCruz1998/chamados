import styled from 'styled-components';

export const Container = styled.body `

    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-size: 100%; 
    display: grid;
    
    
header{
    background-color: rgba(12, 12, 12, 0.438);
    width: 100vw;
    height: 100vh;
    display: grid;
    align-content: center;
    justify-content: center;
    color: rgb(8, 25, 255);
    gap: 10px;
    padding: 0;
    margin: 0;
}

header h1{
    color: white;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 100px;
    margin: 0;
    padding-bottom: 0px;
    margin-bottom: 0;
    padding-left: 50px;
    text-align: left;
}
header h3{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 50px;
    margin: 0;
    padding-bottom: 20px;
    text-align: left;
}

header h6{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:white;
    font-size: 20px;
    margin: 0;
    padding-left: 30px;
}

header div input {
background-color:white;
color: black;
border-radius: 5px;
border: 0;
width: 500px;
height: 50px;
font-family:'Open Sans';
font-size:15px;
text-align: center;
}

header div button{
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    color: white;
    transition: 1s;
    margin-left: 200px;
  }

button:hover {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    border-color: rgb(94, 255, 0);
    color: rgb(94, 255, 0);
  }

`;
