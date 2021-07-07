import usePersist from '../Persist';
import Memo from './Memo';
import AddForm from './AddFrom';
import FindForm from './FindFrom';
import DelForm from './DelFrom';

function MemoPage() {
  const [mode, setMode] = usePersist('mode', 'default')

  return (
    <div>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
        <AddForm />
        <FindForm />
        <DelForm />
      </div>
      <Memo />
    </div>
  )
}

export default App
