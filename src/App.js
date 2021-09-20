import './App.css';
import Container from './components/Container/container';

const productInfo = [
  { 
  title: "Oppo Reno 5 Lite Cep Telefonu",
  price: "3.500,00 TL",
  description: "Ultra ince kasa tasarımı ve üstün performansıyla Oppo Reno5 128 GB etkileyici tarzınızı yansıtır. Etkili kasa tasarımının yanı sıra mükemmel güç ve konfor sunan Oppo Reno5 en son tasarım sistem iyileştiricisine sahiptir. Bu size her zaman akıcı ve hızlı yanıt veren bir deneyim sunar.",
  }
]

function App() {
  return (
    <div className="App">
      <Container product={productInfo}/>      
    </div>
  );
}

export default App;
