import './App.css';
import ProductPageContainer from './containers/ProductPageContainer/productPageContainer';
import { productInfo } from './data/productInfo'; 

function App() {
  return (
    <div className="App">
      <ProductPageContainer productInfo={productInfo} />      
    </div>
  );
}

export default App;
