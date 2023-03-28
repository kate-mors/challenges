import './burger.scss';

const burgerHandle = (e) => {
  e.target.classList.toggle('active')
}

const Burger = () => {
  return (
    <button className="burger" type="button" aria-label="Open mobile menu." onClick={burgerHandle}>
      <span></span>
    </button>
  )
}

export default Burger;
