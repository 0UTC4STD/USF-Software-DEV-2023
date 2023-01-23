-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Season" (
    "ID" int   NOT NULL,
    "Beginning" text   NOT NULL,
    "Ending" Text   NOT NULL,
    "Standings_ID" int   NOT NULL,
    CONSTRAINT "pk_Season" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Players" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    "Team" int   NOT NULL,
    CONSTRAINT "pk_Players" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Teams" (
    "ID" int   NOT NULL,
    "Players_ID" int   NOT NULL,
    "Standings_ID" int   NOT NULL,
    CONSTRAINT "pk_Teams" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Refs" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    CONSTRAINT "pk_Refs" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Standings" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    "Team" int   NOT NULL,
    "Game" int   NOT NULL,
    CONSTRAINT "pk_Standings" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Games" (
    "ID" int   NOT NULL,
    "Team" int   NOT NULL,
    "Ref" int   NOT NULL,
    CONSTRAINT "pk_Games" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Goals" (
    "ID" int   NOT NULL,
    "Game" int   NOT NULL,
    "Players_ID" int   NOT NULL,
    CONSTRAINT "pk_Goals" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "Season" ADD CONSTRAINT "fk_Season_Standings_ID" FOREIGN KEY("Standings_ID")
REFERENCES "Standings" ("ID");

ALTER TABLE "Players" ADD CONSTRAINT "fk_Players_Team" FOREIGN KEY("Team")
REFERENCES "Teams" ("ID");

ALTER TABLE "Teams" ADD CONSTRAINT "fk_Teams_Players_ID" FOREIGN KEY("Players_ID")
REFERENCES "Players" ("ID");

ALTER TABLE "Teams" ADD CONSTRAINT "fk_Teams_Standings_ID" FOREIGN KEY("Standings_ID")
REFERENCES "Standings" ("ID");

ALTER TABLE "Standings" ADD CONSTRAINT "fk_Standings_Team" FOREIGN KEY("Team")
REFERENCES "Teams" ("ID");

ALTER TABLE "Standings" ADD CONSTRAINT "fk_Standings_Game" FOREIGN KEY("Game")
REFERENCES "Games" ("ID");

ALTER TABLE "Games" ADD CONSTRAINT "fk_Games_Team" FOREIGN KEY("Team")
REFERENCES "Teams" ("ID");

ALTER TABLE "Games" ADD CONSTRAINT "fk_Games_Ref" FOREIGN KEY("Ref")
REFERENCES "Refs" ("ID");

ALTER TABLE "Goals" ADD CONSTRAINT "fk_Goals_Game" FOREIGN KEY("Game")
REFERENCES "Games" ("ID");

ALTER TABLE "Goals" ADD CONSTRAINT "fk_Goals_Players_ID" FOREIGN KEY("Players_ID")
REFERENCES "Players" ("ID");

