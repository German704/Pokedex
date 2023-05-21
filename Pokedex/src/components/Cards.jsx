import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Cards({id, name, image, weight, types}) {

  return (
    <Link to={`/pokemon/${id}`} className='cardL'>
    <Card style={{ width: '18rem',margin: "3px",borderRadius:"8px" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{fontSize: "14px"}}>Peso: {weight}</Card.Text>
        <Card.Text style={{margin: "15px"}}>
          { types.map(type => <span key={type.type.name} className={type.type.name}>{type.type.name}</span>) } 
        </Card.Text> 
      </Card.Body>
    </Card>
    </Link>
  );
}

export default Cards;