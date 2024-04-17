import { CopyArea } from './Components/CopyArea/CopyArea';
import { Select } from './Components/Select';
import { Switch } from './Components/Switch';
import { TextField } from './Components/TextField';

// const hiringCompanies = [
//   {
//     imageUrl: './assets/images/hiringCompanies/geekhunter.png',
//     label: 'GeekHunter',
//     value: '123',
//   },
//   {
//     imageUrl: './assets/images/hiringCompanies/geekhunter.png',
//     label: 'Red',
//     value: '1236',
//   },
//   {
//     imageUrl: './assets/images/hiringCompanies/geekhunter.png',
//     label: 'Orange',
//     value: '1234',
//   },
// ];

const roles = [
  {
    label: 'FrontEnd',
    value: '123',
  },
  {
    label: 'Backend',
    value: '1236',
  },
  {
    label: 'FullStack',
    value: '1234',
  },
];

// function getLabel({ imageUrl, label }: any) {
//   return (
//     <div className="flex items-center">
//       {/* <span className="text-base mr-4">{icon}</span> */}
//       <img className="rounded-full w-8 mr-4" src={imageUrl} />
//       <span className="text-base text-zinc-200 mr-4">{label}</span>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <CopyArea filterPrompont="test" />
        <form className="max-w-sm mx-auto">
          <Select label="Local" options={roles} />
          <Select label="Cargo" options={roles} />
          <Select label="Tecnologia" options={roles} />
          <Select label="Experiência" options={roles} />
          <Select label="Tipo de Trabalho" options={roles} />
          <TextField label="Filtros extras" />
          <Switch label="Remover empresas de vagas" />
        </form>
      </div>
    </>
  );
}

export default App;
