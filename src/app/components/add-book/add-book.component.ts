import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'add-book.component.html',
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // TODO 6 : Créer un formulaire avec les champs suivants : title, author, description, category
    // TODO 7 : Ajouter les validations nécessaires
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: () => {
          // Utilisation de SweetAlert2 pour afficher une alerte de succès
          Swal.fire({
            title: 'Succès!',
            text: 'Le livre a été ajouté avec succès.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/books']);
          });
        },
        error: (err: any) => {
          // Utilisation de SweetAlert2 pour afficher une alerte d'erreur
          Swal.fire({
            title: 'Erreur!',
            text: 'Une erreur est survenue lors de l\'ajout du livre.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          console.error('Erreur lors de l\'ajout du livre', err);
        }
      });
    }
  }
}
