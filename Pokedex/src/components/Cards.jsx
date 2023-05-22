import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Cards({id, name, image, weight, types}) {

  return (
    <div id={`${name}_${id}`} className='cardL'>
    <div className='checkbox'>
      <input type="checkbox" id='checkForTrash' className='none' value={`${name}_${id}`} /* onChange={handleChange} *//>
    </div>
    <Link to={`/pokemon/${id}`} /* className='cardL' */>
    <Card style={{ width: '16rem',margin: "3px",borderRadius:"8px" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{fontSize: "14px"}}>Peso: {weight}</Card.Text>
        <Card.Text style={{margin: "15px 0", textAlign: "center"}}>
          { types.map(type => <span key={type.type.name} className={type.type.name}>{type.type.name}</span>) } 
        </Card.Text> 
      </Card.Body>
    </Card>
    </Link>
    </div>
  );
}

export default Cards;