import ProgressBar from "../../components/progress-bar";
const PastReports = (): JSX.Element => {
    const checkpoints = [
        'Ticket Created', 'Investigated', 'Esclalation', 'Resolution', 'Complete'
      ];
    



    return <div>
        <h1>
            hello
        </h1>
        <ProgressBar checkpoints={checkpoints} progress={2}/>
    </div>;
  };
  
  export default PastReports;
  