import NoteLogo from "../assets/noteapplogo.png";
type Prop = {
  styleProps: string;
};
function Header({ styleProps }: Prop) {
  return (
    <div className={styleProps}>
      <div>
        <img src={NoteLogo} className="w-8" />
      </div>
      <div>Note App</div>
    </div>
  );
}

export default Header;
