using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVC.Models
{
    public class GradeModel
    {
        // check to make sure inputs are between 0 and 100 and each field is complete
        [Range(0, 100, ErrorMessage = "Assignments must be between 0 and 100")]
        [Required]
        public double Assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Group Projects must be between 0 and 100")]
        [Required]
        public double GP { get; set; }

        [Range(0, 100, ErrorMessage = "Quizzes must be between 0 and 100")]
        [Required]
        public double Quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Midterms must be between 0 and 100")]
        [Required]
        public double Midterms { get; set; }

        [Range(0, 100, ErrorMessage = "Final Exam grade must be between 0 and 100")]
        [Required]
        public double Final { get; set; }

        [Range(0, 100, ErrorMessage = "Intex grade must be between 0 and 100")]
        [Required]
        public double Intex { get; set; }
    }
}

