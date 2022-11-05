import { useSearchParams } from 'react-router-dom'

function About () {
  const [params] = useSearchParams()
  const id = params.get('id')
  const name = params.get('name')
  if (name.length === 0) {
    return <div>no name</div>
  }
  return (
    <div>
      <h2>About 得到的id: {id} name: {name}</h2>
    </div>
  )
}

export default About