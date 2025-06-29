<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250627081556 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE canard_tag (canard_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_3F1CBB1829D12D74 (canard_id), INDEX IDX_3F1CBB18BAD26311 (tag_id), PRIMARY KEY(canard_id, tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_tag ADD CONSTRAINT FK_3F1CBB1829D12D74 FOREIGN KEY (canard_id) REFERENCES canard (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_tag ADD CONSTRAINT FK_3F1CBB18BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_tag DROP FOREIGN KEY FK_3F1CBB1829D12D74
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_tag DROP FOREIGN KEY FK_3F1CBB18BAD26311
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE canard_tag
        SQL);
    }
}
