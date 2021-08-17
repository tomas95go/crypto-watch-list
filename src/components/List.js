const List = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Marketcap</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((el) => (
            <tr key={el.id}>
              <td> {el.id} </td>
              <td> {el.desc}</td>
              <td> {el.marketcap} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
