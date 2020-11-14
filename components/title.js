import styled from "styled-components";

export default function Title(props) {

    const { title, description } = props;

    return (
        <>  
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
            </head>
            <TitleBox>
                <h1>{title}</h1>
                <p>{description}</p>
            </TitleBox>

            <style jsx>{`
                .title {
                    margin-top: 2em;
                }
            `}
            </style>

        </>
    )
}

const TitleBox = styled.div`
    margin-top: 2em
`