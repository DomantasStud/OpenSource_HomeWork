import React from 'react';
import Moment from 'moment';

const List = (props) => {
  
    const { repos } = props;

  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Salary</th>
        <th>Role</th>
        <th>Employment date</th>
        <th>Home address</th>
      </tr>
      {repos.map((repo) => {
        var dt = repo.employmentDate;
        return (
          <tr key={repo.id} className='list'>
            <td className='repo-firstName'>{repo.firstName} </td>
            <td className='repo-description'>{repo.lastName} </td>
            <td className='repo-description'>{repo.currentSalary} $</td>
            <td className='repo-firstName'>{repo.role} </td>
            
            <td className='repo-description'>{Moment(dt).format('YYYY-MM-DD')}</td>
            <td className=''>{repo.homeAddress}</td>
          </tr>
        );
      })}
      
    </table>
    
    
  );
};


export default List;
