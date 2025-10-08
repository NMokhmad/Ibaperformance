import { execSync } from 'child_process';
import fs from 'fs';

// Lire le résultat de depcheck depuis stdin
let input = '';
process.stdin.setEncoding('utf-8');

for await (const chunk of process.stdin) {
  input += chunk;
}

try {
  const result = JSON.parse(input);
  const unusedDeps = result.dependencies || [];

  if (unusedDeps.length === 0) {
    console.log('✅ Aucune dépendance inutilisée !');
    process.exit(0);
  }

  console.log('🗑️  Dépendances inutilisées trouvées :');
  unusedDeps.forEach(dep => console.log(`  - ${dep}`));

  console.log('\n🔄 Suppression en cours...');
  const depsToRemove = unusedDeps.join(' ');
  execSync(`npm uninstall ${depsToRemove}`, { stdio: 'inherit' });

  console.log('✅ Nettoyage terminé !');
} catch (error) {
  console.error('❌ Erreur lors du parsing ou de la suppression:', error.message);
  process.exit(1);
}