const CardStyle = {
    width:'300px',
    backgroundColor:'white',

};
const mainContent = {};

const subContent = {};
const Card = () => {
    return (
        <>
            <div style={CardStyle}>
                <div style={mainContent}></div>
                <div style={subContent}></div>
            </div>
        </>
    );
};

export default Card;
