using System;
using System.ComponentModel.DataAnnotations;
using dotNetTask.API.Helpers;

namespace dotNetTask.API.Entities
{
    public record Employee
    {
        [Required]
        public Guid Id { get; init; }
        [Required]
        [MaxLength(50),MinLength(1)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50),MinLength(1)]
        public string LastName { get; set; }
        [Required]
        [AgeRange(18,70)]
        public DateTime BirtDate { get; set; }
        [Required]
        [ValidDate("2000/01/01")]
        public DateTime EmploymentDate { get; set; }
        
        public Employee Boss { get; set; }
        [Required]
        public string HomeAddress { get; set; }
        [Required]
        [Range(1, Int32.MaxValue)]
        public int CurrentSalary { get; set; }
        [Required]
        public EmployeeRoles Role { get; set; }
    }
}
