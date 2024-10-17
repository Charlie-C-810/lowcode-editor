
export function Setting({components}:any) {

  return (
    <div>
      <pre>{JSON.stringify(components, null, 2)}</pre>
    </div>
  )
}
