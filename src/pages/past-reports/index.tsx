import ProgressBar from "../../components/progress-bar";
import { NavbarDefault } from "../../components/navbar";
import { FooterWithLogo } from "../../components/footer";
const PastReports = (): JSX.Element => {
    const checkpoints = [
        'Ticket Created', 'Investigated', 'Esclalation', 'Resolution', 'Complete'
      ];
    return <div>
        <NavbarDefault></NavbarDefault>
        <h1>
            hello
        </h1>
        <ProgressBar checkpoints={checkpoints} progress={2}/>

        <FooterWithLogo></FooterWithLogo>
    </div>;
  };
  
  export default PastReports;
  