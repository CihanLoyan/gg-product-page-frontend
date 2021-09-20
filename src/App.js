import './App.css';
import Title from './components/Title/title';
import Price from './components/Price/price'
import Description from './components/Description/description'
import AddToCard from './components/AddToCard/addToCard'

function App() {
  return (
    <div className="App">
      <Title title="Oppo Reno 5 Lite Cep Telefonu" />      
      <Price title="3.500,000 TL" />
      <Description content="Ultra ince kasa tasarımı ve üstün performansıyla Oppo Reno5 128 GB etkileyici tarzınızı
                            yansıtır. Etkili kasa tasarımının yanı sıra mükemmel güç ve konfor sunan Oppo Reno5 en son tasarım
                            sistem iyileştiricisine sahiptir. Bu size her zaman akıcı ve hızlı yanıt veren
                            bir deneyim sunar." />
      <AddToCard span="Sepete Ekle" />
    </div>
  );
}

export default App;
