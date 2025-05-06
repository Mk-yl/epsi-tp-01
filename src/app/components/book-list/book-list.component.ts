import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Router, RouterModule } from '@angular/router';
import { Book } from '../../models/book.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, HighlightDirective]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  data: any[] = [];
  searchTerm: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des livres:', err);
      }
    });
  }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id).subscribe({
      next: (updatedBook: Book) => {
        // TODO 16: Affiche une alerte qui indique que le favori a été modifié
        Swal.fire({
          title: 'Succès!',
          text: 'Le favori a été modifié.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      error: (err: any) => {
        // TODO 17: Affiche une alerte qui indique que la modification du favori a échoué
        Swal.fire({
          title: 'Erreur!',
          text: 'La modification du favori a échoué.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Erreur lors de la modification du favori:', err);
      }
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        // TODO 18: Affiche une alerte qui indique que le livre a été supprimé
        Swal.fire({
          title: 'Succès!',
          text: 'Le livre a été supprimé.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        console.log('Livre supprimé:', id);
      },
      error: (err: any) => {
        // TODO 19: Affiche une alerte qui indique que la suppression du livre a échoué
        Swal.fire({
          title: 'Erreur!',
          text: 'La suppression du livre a échoué.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Erreur lors de la suppression du livre:', err);
      }
    });
  }

  goToBookDetails(id: string): void {
    this.router.navigate(['/books', id]);
  }
}
