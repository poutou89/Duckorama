<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250627081217 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_user DROP FOREIGN KEY FK_EA72098929D12D74
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_user DROP FOREIGN KEY FK_EA720989A76ED395
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE canard_user
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE canard_user (canard_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_EA72098929D12D74 (canard_id), INDEX IDX_EA720989A76ED395 (user_id), PRIMARY KEY(canard_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = '' 
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_user ADD CONSTRAINT FK_EA72098929D12D74 FOREIGN KEY (canard_id) REFERENCES canard (id) ON UPDATE NO ACTION ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE canard_user ADD CONSTRAINT FK_EA720989A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE CASCADE
        SQL);
    }
}
