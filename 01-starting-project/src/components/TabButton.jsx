// export default function TabButton({label}){
//   return(
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }


export default function TabButton({children, onSelect}){


  return(
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}