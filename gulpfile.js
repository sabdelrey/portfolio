// Définition des dépendances
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const del = require('del');
const minify = require('gulp-minify');
// const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// Créer une tâche : paramètres = nom qu'on donne à la tâche, ce que la tâche fait
// Pour lancer la tâche dans le terminal : gulp (nom de la tâche)
// Attention, gulp ne fait pas de msg d'erreur pour les mauvais chemins de fichier

// Tâche browser-sync (lance le live server)
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/" // Dossier de base pour le serveur
        }
    });
});

// Tâche sass (compile le scss en css et reload le live server)
gulp.task('sass', function() {
    return gulp.src('src/assets/styles/scss/**/*.scss') // source des fichiers (** = tous les dossiers et * = tous les fichiers)
    .pipe(sass())
    .pipe(gulp.dest('src/assets/styles/css/')) // destination des fichiers (le dossier css)
    .pipe(browserSync.reload({stream: true})); // reload le live server, stream true montre les changements en direct, sans recharger la page
});

// Tâche clear-scripts (nettoye le dossier vendors)
gulp.task('clear-scripts', function() {
    return del('src/assets/scripts/vendors/**/*.js'); // supprime tous les fichiers js dans le dossier vendors
});

// Tâche update-scripts (converti ES6 en ES5 et reload le live server)
gulp.task('update-scripts', function() {
    return gulp.src('src/assets/scripts/vanilla/**/*.js') // source des fichiers qu'on veux convertir
    .pipe(rollup({plugins: [babel(), resolve(), commonjs()]}, 'umd'))
    .pipe(gulp.dest('src/assets/scripts/vendors/')) // destination des fichiers (le dossier vendors)
    .pipe(browserSync.reload({stream: true})); // relance le live server
});

// Tâche scripts (supprime les fichiers vendors, convertis les scripts et réinjecte les fichiers vendors)
gulp.task('scripts', gulp.series('clear-scripts', 'update-scripts'));

// Tâche watch (surveille les changements dans les fichiers scss, html et js)
gulp.task('watch', function() {
    // (paramètres de la fonction watch = fichiers que je veux surveiller, tâche que je veux lancer)
    gulp.watch('src/assets/scripts/vanilla/**/*.js', gulp.series('scripts')); // surveille les scripts et les convertis à chaque modif
    gulp.watch('src/**/*.html').on('change', browserSync.reload); // surveille les modifications dans le html et reload le live server
    gulp.watch('src/assets/styles/scss/**/*.scss', gulp.series('sass')); // surveille les styles et les compile à chaque modif, évite de relancer manuellement le compileur à chaque fois
});

// Tâche dev (lance toutes les tâches en une seule commande)
gulp.task('dev', gulp.series('sass', gulp.parallel('browser-sync', 'watch'))); // series permet de créer une suite de tâche à lancer, parallel permet de lancer des tâches en même temps


// BUILDER

// Tâche build-fonts
gulp.task('build-fonts', function() {
    return gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts'));
});

// Tâche build-img
gulp.task('build-img', function() {
    return gulp.src('src/assets/img/**/*')
    .pipe(gulp.dest('dist/assets/img'));
});

// Tâche build-projets
gulp.task('build-projets', function() {
    return gulp.src('src/projets/**/*')
    .pipe(gulp.dest('dist/projets'));
});

// Tâche build-docs
gulp.task('build-docs', function() {
    return gulp.src('src/assets/docs/**/*')
    .pipe(gulp.dest('dist/assets/docs'));
});

// Tâche build-scripts
gulp.task('build-scripts', function() {
    return gulp.src('src/assets/scripts/vendors/**/*.js')
    .pipe(minify())
    // .pipe(uglify())
    .pipe(gulp.dest('dist/assets/scripts/vendors/'));
});

// Tâche build-styles
gulp.task('build-styles', function() {
    return gulp.src('src/assets/styles/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/styles/css'));
});

// Tâche build-template
gulp.task('build-template', function() {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

// Tâche build complète 
gulp.task('build', gulp.series('build-fonts', 'build-img', 'build-projets', 'build-docs', 'build-scripts', 'build-styles', 'build-template'));